function gridNum(grid) {
    let tab = [];
    for (let i in grid) {
      tab.push(grid[i].split("").sort().join(""));
    }
  
    for (r = 0; r < tab.length - 1; r++) {       // sum, sub, compare rahe to length me 1  kam likhte hai,
      for (c = 0; c <  tab.length; c++) {
        if (tab[r][c] > tab[r + 1][c]) {
          return "NO";
        }
      }
    }
    return "YES";
  }
  console.log(gridNum(["ebacd", "fghij", "olmkn", "trpqs", "xywuv"]));