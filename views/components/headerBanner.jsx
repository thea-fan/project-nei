var React = require('react');

class HeaderBanner extends React.Component {
  render() {
    return (
        <div class="homepage-banner d-flex text-center align-items-center justify-content-center flex-column text-white">
            <h1 class="mt-5 mb-0">Join your neighbours</h1>
            <p>Nēighbours by chance. &nbsp; <span class="font-italic">Friends by choice.</span></p>
        </div>
     );
  }
}

module.exports = HeaderBanner;