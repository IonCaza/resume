import printVars from '../data/printvars';

const { pageHeight, pageMargins, pxPerIn } = printVars;

export function togglePrintNonPrint() {
  // Apparently we can't calculate the height of elements that have display:none
  // so we show it all on load, insert breakpoints, and then hide what will be printed

  const onlyprint = document.querySelectorAll('div[class*=onlyPrint]');
  for (let i = 0; i < onlyprint.length; i += 1) {
    onlyprint[i].classList.remove('onlyPrint');
    onlyprint[i].classList.add('onlyPrintAfterInject');
  }

  const noprint = document.querySelectorAll('div[class*=noPrintBeforeInject]');
  for (let i = 0; i < noprint.length; i += 1) {
    noprint[i].classList.remove('noPrintBeforeInject');
    noprint[i].classList.add('noPrint');
  }
}

export function insertBreakPoints() {
  const pageHeightPx = pageHeight * pxPerIn - 2 * pageMargins * pxPerIn;
  const divsClean = document.querySelectorAll('div[class*=cleanBreak]');
  const offset = 20; // pixels not accounted for on top
  const splitAtPercent = 0.5; // if content on next page is more than this percent, split

  const printCleanOffsetTops = new Array(divsClean.length - 1);

  // Store offsetTop in separate array which we manipulate later
  for (let i = 0; i < divsClean.length; i += 1) {
    printCleanOffsetTops[i] = divsClean[i].offsetTop;
  }

  // Iterate through all divs to calculate whether splitting is required
  for (let i = 0; i < divsClean.length; i += 1) {
    const onPage = Math.ceil((printCleanOffsetTops[i] + offset) / pageHeightPx);
    const remainderOnNextPage =
      pageHeightPx * onPage - (printCleanOffsetTops[i] + offset + divsClean[i].offsetHeight);
    const doTheSplit = () =>
      Math.abs(remainderOnNextPage / divsClean[i].offsetHeight) > splitAtPercent;
    console.log(i, ' ', remainderOnNextPage / divsClean[i].offsetHeight);
    if (remainderOnNextPage < 0) {
      if (doTheSplit()) {
        const breakpointHeight = divsClean[i].offsetHeight + remainderOnNextPage;
        const csstext = `height:${breakpointHeight}px;display:block;width:100%;clear:both;`;
        const breakpointElement = document.createElement('div');
        breakpointElement.style.cssText = csstext;
        const breakpointSpace = document.createTextNode(' ');
        breakpointElement.appendChild(breakpointSpace);
        divsClean[i].parentNode.insertBefore(breakpointElement, divsClean[i]);

        // now add the difference to all the divsClean below this one
        for (let o = i + 1; o < divsClean.length; o += 1) {
          printCleanOffsetTops[o] +=
            (1 - Math.abs(remainderOnNextPage / divsClean[i].offsetHeight)) *
            divsClean[i].offsetHeight;
        }
      }
    }
  }

  const divsNever = document.querySelectorAll('div[class*=neverBreak]');
  const printNeverOffsetTops = new Array(divsNever.length - 1);
  for (let i = 0; i < divsNever.length; i += 1) {
    printNeverOffsetTops[i] = divsNever[i].offsetTop;
  }

  for (let i = 0; i < divsNever.length; i += 1) {
    const onPage = Math.ceil((printNeverOffsetTops[i] + offset) / pageHeightPx);
    const remainderOnNextPage =
      pageHeightPx * onPage - (printNeverOffsetTops[i] + offset + divsNever[i].offsetHeight);
    const doTheSplit = () => Math.abs(remainderOnNextPage / divsNever[i].offsetHeight) > 0;

    if (remainderOnNextPage < 0) {
      if (doTheSplit()) {
        const breakpointHeight = divsNever[i].offsetHeight + remainderOnNextPage;
        const csstext = `height:${breakpointHeight}px;display:block;width:100%;clear:both;`;
        const breakpointElement = document.createElement('div');
        breakpointElement.style.cssText = csstext;
        const breakpointSpace = document.createTextNode(' ');
        breakpointElement.appendChild(breakpointSpace);
        divsNever[i].parentNode.insertBefore(breakpointElement, divsNever[i]);

        // now add the difference to all the divsNever below this one
        for (let o = i + 1; o < divsNever.length; o += 1) {
          printNeverOffsetTops[o] +=
            (1 - Math.abs(remainderOnNextPage / divsNever[i].offsetHeight)) *
            divsNever[i].offsetHeight;
        }
      }
    }
  }
}
