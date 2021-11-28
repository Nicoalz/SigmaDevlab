import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { green100 } from 'react-native-paper/lib/typescript/styles/colors';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function MyComponent(){
    return(
    <Card style={styles.container}>
        <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
        <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
        </Card.Actions>
    </Card>

    
    )
    
    };
    const styles = StyleSheet.create({
        container: {
        width: 50,
        
        }
    });
    
    

