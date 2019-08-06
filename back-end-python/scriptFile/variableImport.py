import scriptImportTableExcel

print("start")
listOfFilesExcel = scriptImportTableExcel.readFilesInFolder("./files/excel")

for jsonObject in  listOfFilesExcel:
    indexExtension = jsonObject.find(".")

    try:
        if(jsonObject.find("VerHor")==-1):
            scriptImportTableExcel.exportExcelTableAsJsonArray(jsonObject[:indexExtension],".xlsx",".json")
        else:
            scriptImportTableExcel.exportExcelVertHorTableAsJsonArray(jsonObject[:indexExtension],".xlsx",".json")

    except Exception:
        print("Import tabella Ansi failed :"+ jsonObject[:indexExtension])


print("end")
