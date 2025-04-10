import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Paragraph, Title, Card, Text } from 'react-native-paper'

export default function HomeScreen() {
  return (

    <ScrollView>
    <View style={styles.container}>
      <Text variant='headlineSmall' style={{ fontWeight: 'bold'}}>HomeScreen</Text >
      <Card>
        <Card.Content style={{ margin: 10 }}>
            <Title>Um título</Title>
            <Paragraph>
                lorem impsun lorem impsun lorem impsun lorem impsun lorem impsun lorem impsun lorem impsun lorem impsun lorem impsun lorem impsun lorem impsun
            </Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700'}}/>
      </Card>
    </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: 'fff',
      alignItems: 'center',
      paddingTop: 10
    }
  })