import { Observable, Subject } from "rxjs";
import { IWorkerData } from "../models/IWorkerData";

export class WorkerUtil {
    static create(worker: Worker) {
        return new CustomWorker(worker);
    }
}

class CustomWorker implements ICustomWorker {
    private worker: Worker;
    private responseMap = new Map<number, Subject<any>>();

    constructor(sentWorker: Worker) {
        this.worker = sentWorker;
        this.listenToWorker();
    }

    private listenToWorker() {
        this.worker.onmessage = (res: MessageEvent<IWorkerData>) => {
            const data = res.data;
            this.responseMap.get(data.id)?.next(data.payload);
            this.responseMap.get(data.id)?.complete();
        };
    }

    execute<T, S, K>(data: T, name: S): Observable<K> {
        const res = new Subject<K>();
        const workerData: any = {
            id: Math.random(),
            name: name,
            payload: data
        };
        this.responseMap.set(workerData.id, res);
        this.worker.postMessage(workerData);
        return res.asObservable();
    }
}

export interface ICustomWorker {
    execute<T, S, K>(data: T, name: S): Observable<K>;
}