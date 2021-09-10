/// <reference lib="webworker" />

import * as XLSX from 'xlsx';
import { IWorkerData } from '../models/IWorkerData';

addEventListener('message', (event: MessageEvent<IWorkerData>) => {
  const worksheet = event.data.payload;
  const result = (XLSX.utils.sheet_to_json(worksheet, {range:"A3:B200", blankrows:false}));
  const response: IWorkerData = {
    id: event.data.id,
    payload: result
  }
  postMessage(response);
});
