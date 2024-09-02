import React from 'react';
import PropTypes from 'prop-types';

export default function NotificationItem({ type, html, value }) {
  // Si la propriété `html` est fournie, utilisez `dangerouslySetInnerHTML`
  if (html) {
    return <li className={type} data-notification-type={type} dangerouslySetInnerHTML={html}></li>;
  }

  // Sinon, utilisez `value` pour afficher le texte
  return <li className={type} data-notification-type={type}>{value}</li>;
}

// Définition des types des propriétés pour la validation
NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
};

// Valeur par défaut pour `type`
NotificationItem.defaultProps = {
  type: 'default',
};
