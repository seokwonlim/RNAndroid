import React, { Component, PureComponent } from 'react';
import { Text, View, FlatList, Button } from 'react-native';

const DATA1 = []
const DATA2 = []
    for (let i = 0; i < 1000; i++) {
      DATA1.push({ val: `A${i}`, key: i });
      DATA2.push({ val: `B${i}`, key: i });
    }
    
class Row extends PureComponent {
  render () {
    console.log(`rendering row ${this.props.val}`)
    return <Text style={{ paddingVertical: 30 }}>{this.props.val}</Text>
  }
}
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: DATA1 };
  }
  render() {
    return (
      <View style={{ height: '100%' }}>
        <FlatList
          style={{ flex: 1 }}
          data={this.state.data}
          renderItem={({ item }) => <Row val={item.val}/>}
          updateCellsBatchingPeriod={4000}
        />
        <Button
          title="Toggle data"
          style={{ flex: 0 }}
          onPress={() => {
            this.setState(state => {
              if (state.data === DATA1) {
                return { data: DATA2 };
              } else {
                return { data: DATA1 };
              }
            });
          }}
        />
      </View>
    );
  }
}

