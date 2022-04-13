import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, } from 'react-native';

const StopWatch = () => {
  const [startTime, setStartTime] = useState(new Date().getTime())
  const [time, setTime] = useState('00:00:00.0')
  const [started, setStarted] = useState(false)
 
  useEffect(() => {
    return () => {
      if (this.timer) {
        clearInterval(this.timer);
      }
    }
  }, [])

  const start = () => {
    resetTimer();
    setStarted(true);
    this.timer = setInterval( () => {
      setTime(msToTime(new Date().getTime() - startTime))
    });
  }
  
  const stop = () => {
    clearInterval(this.timer);
    setStarted(false);
  }

  const resetTimer = () => {
    setStartTime(new Date().getTime())
    setTime('00:00:00.0')
  }

  const msToTime = (duration) => {
    let milliseconds = parseInt((duration % 1000) / 100)
    let seconds = parseInt((duration / 1000) % 60)
    let minutes = parseInt((duration / (1000 * 60)) % 60)
    let hours = parseInt((duration / (1000 * 60 * 60)) % 24)
    
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>
        { time }
      </Text>
      {
        !started ?
          <Button
            title="Start"
            onPress={() => start()}
          />
        :
          <Button
            title="Stop"
            color="red"
            onPress={() => stop()}
          />
      }
      <Button
        title="Reset"
        color="orange"
        onPress={() => resetTimer()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    fontSize: 40,
    fontFamily: "Menlo-Regular",
  },
})

export default StopWatch;