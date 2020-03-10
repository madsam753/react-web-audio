import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import SampleItem from './SampleItem';
import { Button } from 'react-bootstrap';

class SamplesList extends React.Component {
  constructor(props) {
    super();

    this.addSample = this.addSample.bind(this);
    this.deleteSample = this.deleteSample.bind(this);
  }

  addSample() {
    let samples = this.props.appState.samples;
    samples.push(this.refs.url.value);
    
    this.props.setAppState({
      samples: samples,
    });
  }

  deleteSample(url) {
    let samples = this.props.appState.samples;
    let i = samples.indexOf(url);
    samples.splice(i, 1);
        
    this.props.setAppState({
      samples: samples,
    });
  }

  render() {
    return (
      <Jumbotron style={{ padding: '10px' }}>
        <h3 style={{ textAlign: 'center' }}>Samples List</h3>
        <div style={{ display: 'block' }}>
          <b>Url:</b> <input ref='url' type='text'style={{ width: '330px', marginTop: '3px', marginBottom: '20px' }}/>
          <Button variant='secondary' onClick={this.addSample} style={{ width: '70px', float: 'right', marginRight: '5px' }} >Add</Button>
        </div>
        { this.props.appState.samples.map((url, key) => 
          <SampleItem
            url={url}
            key={key}
            appState={this.props.appState}
            setAppState={this.props.setAppState}
            addChannel={this.props.addChannel}
            deleteSample={this.deleteSample}
          />
          )
        }
      </Jumbotron>
    );
  }
}

export default SamplesList;
