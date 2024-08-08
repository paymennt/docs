// src/components/CenteredSearchBar.js
import React from 'react';
import { DocSearch } from '@docsearch/react';
import '@docsearch/css';
import './NavBarSearch.css'; // Add a CSS file for styling

function NavBarSearch() {
  return (
    <div className="nav-bar-search-container">
      <DocSearch
        appId="YOUR_ALGOLIA_APP_ID"
        apiKey="YOUR_ALGOLIA_API_KEY"
        indexName="YOUR_ALGOLIA_INDEX_NAME"
        placeholder="Search by name phone or email."
      />
    </div>
  );
}

export default NavBarSearch;
