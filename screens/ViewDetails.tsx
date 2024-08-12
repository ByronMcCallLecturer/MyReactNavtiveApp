// ViewDetails.tsx
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './RootStackPrams';

type ViewDetailsProps = NativeStackScreenProps<RootStackParamList, 'ViewDetails'>;

export default function ViewDetails({ route }: ViewDetailsProps) {
  const { NameSend, SurnameSend } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Name: {NameSend} Surname: {SurnameSend}</Text>
    </View>
  );
}
