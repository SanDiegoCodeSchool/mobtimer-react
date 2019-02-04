import React from 'react';

class SummaryPage extends React.Component {
    constructor(props) {
        super(props);
      }
      render() {
          const { mobTimeTotal } = this.props;
        return (
          <div>
              <h1>Your Total Mob Coding Session lasted {mobTimeTotal}!</h1>
          </div>
        );
      }
    };
    
    export default SummaryPage;