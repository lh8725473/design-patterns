// Buffer function
// readAll function
// readAllSync function
// writeAll function
// writeAllSync function
// build object
// chmodSync function
// chmod function
// chownSync function
// chown function
// customInspect symbol
// inspect function
// copyFileSync function
// copyFile function
// chdir function
// cwd function
// errors object
// File function
// open function
// openSync function
// create function
// createSync function
// stdin object
// stdout object
// stderr object
// seek function
// seekSync function
// read function
// readSync function
// write function
// writeSync function
// watchFs function
// internal symbol
// copy function
// iter function
// iterSync function
// SeekMode object
// makeTempDirSync function
// makeTempDir function
// makeTempFileSync function
// makeTempFile function
// metrics function
// mkdirSync function
// mkdir function
// connect function
// listen function
// env object
// exit function
// execPath function
// run function
// Process function
// readDirSync function
// readDir function
// readFileSync function
// readFile function
// readTextFileSync function
// readTextFile function
// readLinkSync function
// readLink function
// realPathSync function
// realPath function
// removeSync function
// remove function
// renameSync function
// rename function
// resources function
// close function
// statSync function
// lstatSync function
// stat function
// lstat function
// connectTls function
// listenTls function
// truncateSync function
// truncate function
// isatty function
// version object
// writeFileSync function
// writeFile function
// writeTextFileSync function
// writeTextFile function
// test function
// core object
// args object
// pid number
// noColor boolean
function logProps() {
  for (const key in Deno) {
    if (Deno.hasOwnProperty(key)) {
      console.log(key, typeof (Deno as any)[key]);
    }
  }
}

logProps();
