import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from "react-redux";

import styles from '../assets/styles';

class About extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            about:{}
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.about}>
                <Text> <about.prenom> </Text>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => {
    return {
        about: state.about
    };
}

export default connect(
    mapStateToProps
)(About);