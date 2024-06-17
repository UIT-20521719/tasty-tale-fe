import viewDetailRecipe from '@/api/recipe/viewDetail';
import FirebaseImage from '@/components/FirebaseImage';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import PrimaryButton from '@/components/PrimaryButton';
import { Recipe } from '@/types/Recipe';
import { useQuery } from '@tanstack/react-query';
import { router, useLocalSearchParams } from 'expo-router';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Entypo from '@expo/vector-icons/Entypo';
import { useState } from 'react';
import { Review } from '@/types/Review';

export default function Modal() {
  const params = useLocalSearchParams();
  const recipeId = params.id;

  const { data, isLoading } = useQuery<Recipe>({
    queryKey: ['detail-recipe', recipeId],
    queryFn: viewDetailRecipe,
  });
  console.log({ data, isLoading });

  const [isFav, serFav] = useState(false);

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
    >
      {data ? (
        // <View>
        // 	<ParallaxScrollView
        // 		headerImage={
        // 			data.images?.[0] ? (
        // 				<FirebaseImage
        // 					style={{ width: "100%", height: 400 }}
        // 					id={data.images?.[0].url}
        // 				/>
        // 			) : (
        // 				<View style={{ width: "100%", height: 400 }} />
        // 			)
        // 		}
        // 		headerBackgroundColor={{
        // 			dark: "",
        // 			light: "",
        // 		}}
        // 	>
        // 		<Text style={{ color: "black" }}>Hello</Text>
        // 	</ParallaxScrollView>
        // </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'flex-start',
            // alignItems: 'center',
          }}
        >
          <FirebaseImage
            style={{ width: '100%', height: '40%' }}
            id={data.images?.[0].url}
          />
          <View
            style={{
              //   width: '100%',
              height: 60,
              position: 'absolute',
              top: 16,
              left: 16,
              right: 16,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                width: 48,
                height: 48,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 70,
              }}
              onPress={router.back}
            >
              <Entypo name="chevron-left" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                width: 48,
                height: 48,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 70,
              }}
              onPress={() => serFav(!isFav)}
            >
              {isFav ? (
                <Entypo name="heart" size={24} color="orange" />
              ) : (
                <Entypo name="heart-outlined" size={24} color="black" />
              )}
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
              paddingHorizontal: 16,
            }}
          >
            <Text
              numberOfLines={2}
              lineBreakMode="tail"
              style={{
                fontSize: 24,
                fontWeight: 'bold',
              }}
            >
              {data.title}
            </Text>
            <View style={{ flexDirection: 'row', paddingVertical: 16 }}>
              <Entypo name="heart" size={24} color="orange" />
              <Text>{` ${data.likes} | ${data.reviewNum} Reviews`}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Entypo name="clock" size={24} color="orange" />
              <Text>{` ${data.timeToCook} minutes to cook`}</Text>
            </View>
          </View>
          <ScrollView>
            {/* REVIEW */}
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                paddingHorizontal: 16,
                paddingVertical: 16,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: '600' }}>
                Reviews ({data.reviewNum})
              </Text>
            </View>

            {/* INREODUCE, INGREDIENTS, STEPS */}
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                paddingHorizontal: 16,
                paddingVertical: 16,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: '600' }}>INTRODUCE</Text>
              <Text>{data.description}</Text>
            </View>

            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                paddingHorizontal: 16,
                paddingVertical: 16,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: '600' }}>
                INGREDIENTS
              </Text>
              <View>
                {data.ingredients.map((ingre) => {
                  return (
                    <Text>
                      {ingre.quantity} {ingre.item}
                    </Text>
                  );
                })}
              </View>
            </View>

            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                paddingHorizontal: 16,
                paddingVertical: 16,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: '600' }}>STEPS</Text>
              <View>
                {data.steps.map((step, index) => {
                  return (
                    <>
                      <Text>
                        {step.order + 1} {step.title}
                      </Text>
                      <Text>{step.content}</Text>
                    </>
                  );
                })}
              </View>
            </View>
          </ScrollView>
        </View>
      ) : null}
    </SafeAreaView>
  );
}
