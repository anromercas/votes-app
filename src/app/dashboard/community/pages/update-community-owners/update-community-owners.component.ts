import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-update-community-owners',
  templateUrl: './update-community-owners.component.html',
  styleUrls: ['./update-community-owners.component.css']
})
export class UpdateCommunityOwnersComponent {
  readExcelFile(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);
        console.log(json);
        this.formatData(json)
      }
      reader.readAsArrayBuffer(file);
    }
  }

  formatData(data: any) {
    let newData = [];
    let arrProperties: any = [];
    let mainObj;
    for (let i = 0; i < data.length; i++) {
      const obj = data[i];
      const keyLength = Object.keys(obj).length;
      if (keyLength > 3) {
        if(i !== 0) {
          mainObj['propiedades'] = arrProperties;
          newData.push(mainObj);
          arrProperties = [];
        }
        mainObj = { ...obj };
      } else if (keyLength < 4) {
        arrProperties.push({ ...obj });
      }
    }
    console.log(newData)

  }
}
