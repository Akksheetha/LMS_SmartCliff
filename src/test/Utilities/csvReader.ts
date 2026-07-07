import fs from 'fs'
import path from 'path'
import {parse} from 'csv-parse/sync'

export function readCsvData(filename:string) {
    const filepath = path.resolve(__dirname,'../../../testData/',filename)
    const content = fs.readFileSync(filepath,'utf-8')
    return parse(content, {
        skip_empty_lines:true,
        columns:true,
        trim:true
    })
}