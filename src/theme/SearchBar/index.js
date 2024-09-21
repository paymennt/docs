// src/theme/SearchBar/index.js
import React from 'react';
import { useHistory } from 'react-router-dom';
import { DocSearch } from '@docsearch/react';
import '@docsearch/css';
import './styles.css'; // Add a CSS file for any additional styles

function SearchBar() {
  const history = useHistory();

  return (
    <div className="custom-search-bar">
      <DocSearch
        appId="LTT5YM30FP"
        apiKey="b65796a965c5dbfa70790646ec8f3dbd"
        indexName="paymennt"
        placeholder="Search the docs..."
        onSelect={({ item, event }) => {
          if (event.type === 'click') {
            history.push(item.url);
          }
        }}
        // Customize the render function to exclude the SVG icon
        render={({ hits, onSelect, query, context }) => (
          <form className="ds__search">
            <input
              className="ds__input"
              type="search"
              value={query}
              onChange={event => context.onInput(event)}
              placeholder="Search"
              aria-label="Search"
            />
            {hits.length > 0 && (
              <ul className="ds__hits">
                {hits.map(hit => (
                  <li key={hit.objectID} onClick={() => onSelect(hit)}>
                    {hit._highlightResult.title.value}
                  </li>
                ))}
              </ul>
            )}
          </form>
        )}
      />
    </div>
  );
}

export default SearchBar;
