// src/components/CenteredSearchBar.js
import React from 'react';
import { DocSearch } from '@docsearch/react';
import '@docsearch/css';
import './CenteredSearchBar.css'; // Add a CSS file for styling

function CenteredSearchBar() {
  return (
    <div className="centered-search-container">
      <DocSearch
        appId="LTT5YM30FP"
        apiKey="b65796a965c5dbfa70790646ec8f3dbd"
        indexName="paymennt"
        placeholder="Search by name phone or email."
      />
    </div>
  );
}

export default CenteredSearchBar;
