import { View, Button, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '@/store/actions';

export default function Counter() {
  const count = useSelector((state: any) => state.count);
  const dispatch = useDispatch();

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Text style={{ color: 'white' }}>Count: {count}</Text>
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </View>
  );
}
