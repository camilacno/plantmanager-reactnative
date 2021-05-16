import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View, Text, Image } from 'react-native';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';
import { PlantProps, loadPlants } from '../libs/storage';
import Header from '../components/Header';
import { PlantCardSecondary } from '../components/PlantCardSecondary';
import waterDrop from '../assets/waterdrop.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function MyPlants() {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWatered, setNextWatered] = useState<string>();

  useEffect(() => {
    async function loadStoragedData() {
      const plantsStoraged = await loadPlants();
      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt }
      );

      setNextWatered(
        `Não esqueça de regar a ${plantsStoraged[0].name} em ${nextTime}`
      );

      setMyPlants(plantsStoraged);
      setLoading(false);
    }

    loadStoragedData();
  }, []);

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.tipContainer}>
        <Image source={waterDrop} style={styles.tipImage} />
        <Text style={styles.tipText}>{nextWatered}</Text>
      </View>

      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>Próximas regadas</Text>

        <FlatList
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <PlantCardSecondary data={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: colors.background,
  },
  tipContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.blue_light,
    padding: 15,
    borderRadius: 20,
  },
  tipImage: {
    width: 56,
    height: 56,
    marginRight: 10,
  },
  tipText: {
    flex: 1,
    marginLeft: 20,
    fontFamily: fonts.text,
    color: colors.blue,
    fontSize: 17,
    textAlign: 'justify',
  },
  plants: {
    flex: 1,
    width: '90%',
  },
  plantsTitle: {
    marginTop: 20,
    marginBottom: 10,
    fontFamily: fonts.heading,
    color: colors.heading,
    fontSize: 24,
    textAlign: 'left',
  },
});
