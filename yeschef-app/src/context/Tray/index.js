import React, { useState, useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { omit, reduce, has } from 'underscore';

// context
import Tray from './Tray';
export { useTrayDishes } from './Tray';

function Index({ children }) {
  const [trayDishes, setTrayDishes] = useState({});
  const [groupedTrayDishes, setGroupedTrayDishes] = useState({});

  useEffect(() => {}, [trayDishes]);

  const addDish = useCallback(
    (section, type, name, food_id) => {
      const key = section + '.' + type + '.' + name;
      const updatedTrayDishes = {
        ...trayDishes,
        ...{ [key]: { section, type, name } }
      };
      setTrayDishes(updatedTrayDishes);
      const updatedGroup = reduce(
        Object.entries(updatedTrayDishes),
        (dishesGroup, [food_id, dish]) => {
          if (dishesGroup?.[dish.section]) {
            dishesGroup[dish.section] = [...dishesGroup[dish.section], dish];
          } else {
            dishesGroup[dish.section] = [dish];
          }
          return dishesGroup;
        },
        {}
      );
      setGroupedTrayDishes(updatedGroup);
    },
    [trayDishes]
  );

  const removeDish = useCallback(
    (section, type, name, food_id) => {
      const key = section + '.' + type + '.' + name;
      const updatedTrayDishes = omit(trayDishes, key);
      setTrayDishes(updatedTrayDishes);
      const updatedGroup = reduce(
        Object.entries(updatedTrayDishes),
        (dishesGroup, [food_id, dish]) => {
          if (dishesGroup?.[dish.section]) {
            dishesGroup[dish.section] = [...dishesGroup[dish.section], dish];
          } else {
            dishesGroup[dish.section] = [dish];
          }
          return dishesGroup;
        },
        {}
      );
      setGroupedTrayDishes(updatedGroup);
    },
    [trayDishes]
  );

  const isDishTrayed = useCallback(
    (section, type, name, food_id) => {
      const key = section + '.' + type + '.' + name;
      return has(trayDishes, key);
    },
    [trayDishes]
  );

  const values = useMemo(() => {
    return {
      groupedTrayDishes,
      isDishTrayed,
      addDish,
      removeDish
    };
  }, [trayDishes]);

  return <Tray.Provider value={values}>{children}</Tray.Provider>;
}

Index.propTypes = {
  children: PropTypes.node.isRequired
};

export default Index;
