import { Link } from 'react-router-dom';
import { ColorsCellData } from '../../models/colors-cell-data';
import './Color.css';
import { ACCENT_COLORS, BASE_COLORS, HIGHLIGHT_COLORS, NEUTRAL_COLORS } from './colors-data';
const Colors = () => {
  return (
    <div className="wrapper">
      <p>
        <img src="assets/logo.png" alt="CARNIVAL" />
      </p>
      <h1>Solid colors</h1>
      <h2>Solid colors are inspired by our gradients.</h2>
      <p>
        Solid colors play a supporting role. They’re used in copy, to hold text, and in charts and graphs and iconography.
      </p>
      <SectionBaseColors></SectionBaseColors>
      <SectionAccentColors/>
      <SectionNeutralColors />
      <SectionHighlightColors />
      <p style={{ marginTop: "var(--big-gap)" }}>
          <Link className="btn btn-primary" to="/" style={{ width: "106px" }}>
            Back
          </Link>
        </p>
    </div>
  )
}

const SectionBaseColors = () => {
  return (
    <section>
      <h2>Base colors</h2>

      <p>
        Our midnight blue—deep, rich, mysterious, and lit from within— helps to differentiate Cognizant as a
        foundational color. Use white and midnight blue for high contrast solid color backgrounds
        and most text (instead of using black). These colors ground the gradients as well as all other accent
        colors.
      </p>
      <table>
        <tbody>
          {createRows(BASE_COLORS)}
        </tbody>
      </table>
    </section>
  )
}

const SectionAccentColors = () => {
  return (
    <section>
      <h2>Accent colors</h2>
      <p>
        Inspired by the three gradients, these colors are helpful for secondary headlines, lines, and graphic
        elements. Avoid using accent colors as primary headlines, where possible.
      </p>
      <table>
        <tbody>
          {createRows(ACCENT_COLORS)}
        </tbody>
      </table>
    </section>
  )
}

const SectionNeutralColors = () => {
  return (
    <section>
      <h2>Neutral colors</h2>
      <p>
        Gray shades can be used for tertiary information such as footnotes or as backgrounds for charts and graphs.
      </p>
      <table>
        <tbody>
          {createRows(NEUTRAL_COLORS)}
        </tbody>
      </table>
    </section>
  )
}

const SectionHighlightColors = () => {
  return (
    <section>
      <h2> Highlight colors </h2>
      <p>
        Use these sparingly to highlight details in charts and graphs. Red compliments the plum color. Yellow
        compliments the blue color. Teal can also be used as general highlight color.
      </p>
      <table>
        <tbody>
          {createRows(HIGHLIGHT_COLORS)}
        </tbody>
      </table>
    </section>
  )
}

const createRows = (colors: ColorsCellData[]) => {
  return colors.map(color => {
    const pantoneCmykCell = getPantoneCmykCell(color.pantone, color.cmyk);
    return (
      <tr key={color.cssVariableName} style={{color: !color.isConfirmed ? 'var(--highlight-red)': 'inherit'}}>
      <td> { color.title }</td>
      <td>
        <div className="sample-rectangle" style={{backgroundColor: `var(${color.cssVariableName})`}}></div>
      </td>
      <td> { color.hex }</td>
      <td> { color.cssVariableName }</td>
      <td> { color.rgb } </td>
      { pantoneCmykCell.length > 0 ? (<td> { pantoneCmykCell } </td>) : '' }
    </tr>
    )
  });
}

const getPantoneCmykCell = (pantone: string = '', cmyk: String = '') => {
  if (pantone.length > 0 && cmyk.length > 0) {
    return `${pantone} / ${cmyk}`;
  } else if (pantone.length > 0) {
    return pantone;
  } else if (cmyk.length > 0) {
    return cmyk;
  }
  return '';
}


export default Colors;