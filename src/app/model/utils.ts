import { HttpParams } from '@angular/common/http';

export function getHeader(headerName: string, field: string, minWidth: number, callback?, filter = 'text') {
  return {
    headerName,
    field,
    minWidth,
    filter,
    cellClass: 'text-left',
    headerClass: 'text-left text-white bg-info pl-2 w-100',
    cellRender: callback
  };
}

export function formatAsCurrency(num: number) {
  return num ? '€' + num : num;
}

export function creatOptions(parameters: Map<string, any>): HttpParams {
  let params: HttpParams = new HttpParams();
  parameters.forEach((value, key) => {
    if (value && value != null){
      params = params.append(key, value);
    }
  });
  return params;
}

