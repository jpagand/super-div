import styled, { css } from 'styled-components';

const BREAKPOINTS = {
  lg: 1200,
  md: 992,
  sm: 768,
};
const GUTTER = 15;

const Media = Object.keys(BREAKPOINTS).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @Media (min-width: ${BREAKPOINTS[label]}px) {
      ${css(...args)}
    }`;

  return acc;
}, {});

const colCommon = `
padding-left: ${GUTTER}px;
padding-right: ${GUTTER}px;
width: 100%;
position: relative;
min-height: 1px;
`;

const colSize = (size) => {
  if (Number.isInteger(size) && size >= 1 && size <= 12) {
    return `
    -ms-flex: 0 0 ${(100 * size) / 12}%;
    flex: 0 0 ${(100 * size) / 12}%;
    max-width: ${(100 * size) / 12}%;
    `;
  }
  return `
  -ms-flex-positive: 1;
  flex-grow: 1;
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  max-width: 100%;`;
};


const colOffset = (size) => Number.isInteger(size) && size >= 1 && size <= 12 && `
margin-left: ${(100 * size) / 12}%;
`;

const startCol = `
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;
text-align: start;
`;
const centerCol = `
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
text-align: center;
`;
const endCol = `
-webkit-box-pack: end;
-ms-flex-pack: end;
justify-content: flex-end;
text-align: end;
`;

const topCol = `
-webkit-box-align: start;
-ms-flex-align: start;
align-items: flex-start;
`;
const middleCol = `
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
`;
const bottomCol = `
-webkit-box-align: end;
-ms-flex-align: end;
align-items: flex-end;
`;
const aroundCol = `
  -ms-flex-pack: distribute;
  justify-content: space-around;
`;

const betweenCol = `
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  `;
const firstCol = `
  -webkit-box-ordinal-group: 0;
  -ms-flex-order: -1;
  order: -1;
  `;
const lastCol = `
  -webkit-box-ordinal-group: 2;
  -ms-flex-order: 1;
  order: 1;
`;

const dNone = `
  display: none !important;
`;

const dInline = `
  display: inline !important;
`;

const dInlineBlock = `
  display: inline-block !important;
`;

const dBlock = `
  display: block !important;
`;

const dTable = `
  display: table !important;
`;

const dTableRow = `
  display: table-row !important;
`;

const dTableCell = `
  display: table-cell !important;
`;

const dFlex = `
  display: flex !important;
`;

const dInlineFlex = `
  display: inline-flex !important;
`;

const noMargin = `
  margin: 0px;
`;

const noPadding = `
  padding: 0px;
`;

const spacing = (type, size) => {
  let sizes = size;
  if (!Array.isArray(size)) {
    sizes = [size];
  }
  if (sizes.length && (sizes[0] || sizes[0] === 0)) {
    return `
      ${type}: ${sizes.join('rem ')}rem;
    `;
  }
  return '';
};

const superDivMe = (props) => css`
  ${(props.container || props.containerFluid) && `
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    padding-right: ${GUTTER}px;
    padding-left: ${GUTTER}px;
  `}

  ${props.row && `
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    margin-right: -${GUTTER}px;
    margin-left: -${GUTTER}px;
  `}

  ${props.row && props.reverse && `
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  `}

  ${props.row && props.noGutters && `
    margin-left: 0;
    margin-right: 0;
    > div {
      padding-left: 0;
      padding-right: 0;
    }
  `}

  ${(props.colXs || props.colXsOffset) && colCommon}
  ${props.colXs && colSize(props.colXs)}
  ${props.colXsOffset && colOffset(props.colXsOffset)}


  ${props.startXs && startCol}
  ${props.centerXs && centerCol}
  ${props.endXs && endCol}

  ${props.topXs && topCol}
  ${props.middleXs && middleCol}
  ${props.bottomXs && bottomCol}

  ${props.aroundXs && aroundCol}
  ${props.betweenXs && betweenCol}

  ${props.firstXs && firstCol}
  ${props.lastXs && lastCol}

  ${(props.dNone || props.dNoneXs) && dNone}
  ${(props.dBlock || props.dBlockXs) && dBlock}
  ${(props.dInlineBlock || props.dInlineBlockXs) && dInlineBlock}
  ${(props.dInline || props.dInlineXs) && dInline}
  ${(props.dTable || props.dTableXs) && dTable}
  ${(props.dTableRow || props.dTableRowXs) && dTableRow}
  ${(props.dTableCell || props.dTableCellXs) && dTableCell}
  ${(props.dFlex || props.dFlexXs) && dFlex}
  ${(props.dInlineFlex || props.dInlineFlexXs) && dInlineFlex}

  ${spacing('margin', props.margin)}
  ${spacing('margin-bottom', props.marginBottom)}
  ${spacing('margin-top', props.marginTop)}
  ${spacing('margin-right', props.marginRight)}
  ${spacing('margin-left', props.marginLeft)}

  ${spacing('padding', props.padding)}
  ${spacing('padding-bottom', props.paddingBottom)}
  ${spacing('padding-top', props.paddingTop)}
  ${spacing('padding-right', props.paddingRight)}
  ${spacing('padding-left', props.paddingLeft)}

  ${spacing('margin', props.marginXs)}
  ${spacing('margin-bottom', props.marginBottomXs)}
  ${spacing('margin-top', props.marginTopXs)}
  ${spacing('margin-right', props.marginRightXs)}
  ${spacing('margin-left', props.marginLeftXs)}

  ${spacing('padding', props.paddingXs)}
  ${spacing('padding-bottom', props.paddingBottomXs)}
  ${spacing('padding-top', props.paddingTopXs)}
  ${spacing('padding-right', props.paddingRightXs)}
  ${spacing('padding-left', props.paddingLeftXs)}
    
  ${props.noMarginXs && noMargin}
  ${props.noPaddingXs && noPadding}

  ${Media.sm`
    ${props.container && 'max-width: 720px;'}

    ${(props.colSm || props.colSmOffset) && colCommon}
    ${props.colSm && colSize(props.colSm)}
    ${props.colSmOffset && colOffset(props.colSmOffset)}

    ${props.startSm && startCol}
    ${props.centerSm && centerCol}
    ${props.endSm && endCol}

    ${props.topSm && topCol}
    ${props.middleSm && middleCol}
    ${props.bottomSm && bottomCol}

    ${props.aroundSm && aroundCol}
    ${props.betweenSm && betweenCol}

    ${props.firstSm && firstCol}
    ${props.lastSm && lastCol}

    ${props.dNoneSm && dNone}
    ${props.dBlockSm && dBlock}
    ${props.dInlineBlockSm && dInlineBlock}
    ${props.dInlineSm && dInline}
    ${props.dTableSm && dTable}
    ${props.dTableRowSm && dTableRow}
    ${props.dTableCellSm && dTableCell}
    ${props.dFlexSm && dFlex}
    ${props.dInlineFlexSm && dInlineFlex}

    ${spacing('margin', props.marginSm)}
    ${spacing('margin-bottom', props.marginBottomSm)}
    ${spacing('margin-top', props.marginTopSm)}
    ${spacing('margin-right', props.marginRightSm)}
    ${spacing('margin-left', props.marginLeftSm)}
    
    ${spacing('padding', props.paddingSm)}
    ${spacing('padding-bottom', props.paddingBottomSm)}
    ${spacing('padding-top', props.paddingTopSm)}
    ${spacing('padding-right', props.paddingRightSm)}
    ${spacing('padding-left', props.paddingLeftSm)}

    ${props.noMarginSm && noMargin}
    ${props.noPaddingSm && noPadding}
  `}

  ${Media.md`
    ${props.container && 'max-width: 960px;'}

    ${(props.colMd || props.colMdOffset) && colCommon}
    ${props.colMd && colSize(props.colMd)}
    ${props.colMdOffset && colOffset(props.colMdOffset)}

    ${props.startMd && startCol}
    ${props.centerMd && centerCol}
    ${props.endMd && endCol}

    ${props.topMd && topCol}
    ${props.middleMd && middleCol}
    ${props.bottomMd && bottomCol}

    ${props.aroundMd && aroundCol}
    ${props.betweenMd && betweenCol}

    ${props.firstMd && firstCol}
    ${props.lastMd && lastCol}

    ${props.dNoneMd && dNone}
    ${props.dBlockMd && dBlock}
    ${props.dInlineBlockMd && dInlineBlock}
    ${props.dInlineMd && dInline}
    ${props.dTableMd && dTable}
    ${props.dTableRowMd && dTableRow}
    ${props.dTableCellMd && dTableCell}
    ${props.dFlexMd && dFlex}
    ${props.dInlineFlexMd && dInlineFlex}

    ${spacing('margin', props.marginMd)}
    ${spacing('margin-bottom', props.marginBottomMd)}
    ${spacing('margin-top', props.marginTopMd)}
    ${spacing('margin-right', props.marginRightMd)}
    ${spacing('margin-left', props.marginLeftMd)}
    
    ${spacing('padding', props.paddingMd)}
    ${spacing('padding-bottom', props.paddingBottomMd)}
    ${spacing('padding-top', props.paddingTopMd)}
    ${spacing('padding-right', props.paddingRightMd)}
    ${spacing('padding-left', props.paddingLeftMd)}

    ${props.noMarginMd && noMargin}
    ${props.noPaddingMd && noPadding}
  `}

  ${Media.lg`
    ${props.container && 'max-width: 1140px;'}

    ${(props.colLg || props.colLgOffset) && colCommon}
    ${props.colLg && colSize(props.colLg)}
    ${props.colLgOffset && colOffset(props.colLgOffset)}

    ${props.startLg && startCol}
    ${props.centerLg && centerCol}
    ${props.endLg && endCol}

    ${props.topLg && topCol}
    ${props.middleLg && middleCol}
    ${props.bottomLg && bottomCol}

    ${props.aroundLg && aroundCol}
    ${props.betweenLg && betweenCol}

    ${props.firstLg && firstCol}
    ${props.lastLg && lastCol}

    ${props.dNoneLg && dNone}
    ${props.dBlockLg && dBlock}
    ${props.dInlineBlockLg && dInlineBlock}
    ${props.dInlineLg && dInline}
    ${props.dTableLg && dTable}
    ${props.dTableRowLg && dTableRow}
    ${props.dTableCellLg && dTableCell}
    ${props.dFlexLg && dFlex}
    ${props.dInlineFlexLg && dInlineFlex}

    ${spacing('margin', props.marginLg)}
    ${spacing('margin-bottom', props.marginBottomLg)}
    ${spacing('margin-top', props.marginTopLg)}
    ${spacing('margin-right', props.marginRightLg)}
    ${spacing('margin-left', props.marginLeftLg)}
    
    ${spacing('padding', props.paddingLg)}
    ${spacing('padding-bottom', props.paddingBottomLg)}
    ${spacing('padding-top', props.paddingTopLg)}
    ${spacing('padding-right', props.paddingRightLg)}
    ${spacing('padding-left', props.paddingLeftLg)}

    ${props.noMarginLg && noMargin}
    ${props.noPaddingLg && noPadding}
  `}
  ${props.noMargin && noMargin}
  ${props.noPadding && noPadding}
`;
export const SuperDiv = styled.div`
  ${superDivMe}
`;

export default SuperDiv;
