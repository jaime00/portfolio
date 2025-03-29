import { Link } from 'wouter';
import { getStyleButton } from '../../services';

export default function Button({
  children,
  isDark = true,
  to = '/',
  openUrl = null,
  type = null,
  style = {},
}) {
  const classes = getStyleButton({ isDark });

  const renderButton = (content) => (
    <button style={style} aria-label="button" type="button" className={classes}>
      {content}
    </button>
  );

  if (openUrl) {
    return (
      <button
        style={style}
        aria-label="button"
        type="button"
        className={classes}
        onClick={() => window.open(openUrl)}
      >
      	{children}
      </button>
    );
  }

  if (type) {
    return <a href="mailto:imjaimetorresv@gmail.com">{renderButton(children)}</a>;
  }

  return <Link to={to}>{renderButton(children)}</Link>;
}
