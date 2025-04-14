import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FlatList, View, Text, Image } from 'react-native';

import books from '../assets/dummyBooks';

export default function BookListItem() {
  return (
    <View>
      <FlatList
        contentContainerClassName="gap-2"
        data={books}
        renderItem={({ item }) => (
          <View className="flex-row items-center">
            <Image source={{ uri: item.thumbnail_url }} className="h-20 w-20" />
            <View className="m-3 flex-1">
              <Text className="text-md font-semibold">{item.title}</Text>
              <Text>{item.author}</Text>
              <Text>49m left</Text>
            </View>
            <View className="flex-row gap-4 p-4">
              <FontAwesome name="play-circle" color="gray" size={20} />
              <FontAwesome name="download" color="gray" size={20} />
              <FontAwesome name="plus" color="gray" size={20} />
            </View>
          </View>
        )}
      />
    </View>
  );
}
