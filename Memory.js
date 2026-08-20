function Memory() {
  //シート名取得
  let Input = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("入力");
  let memory = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("記録用");
  let IRow = Input.getRange(1,1).getDataRegion().getLastRow();
  let memoryRow = memory.getLastRow();

  //前日の日付を取得
  let day = new Date();
  day.setDate(day.getDate() - 1);
  let Yesterday = Utilities.formatDate(day,"JST","yyyyMMdd")

  //前日分の情報を入力
  Input.getRange(2,1,IRow,3).copyTo(memory.getRange(memoryRow,2).offset(1,0,),SpreadsheetApp.CopyPasteType.PASTE_VALUES,false);

  //「データベース」に日付を入力
  for (i = 0; i < IRow-1; i++){
    memory.getRange(memoryRow + i,1).offset(1,0).setValue(Yesterday);
  }

  //「入力」をクリア
  Input.getRange(2,1,1000,3).clearContent();
}
