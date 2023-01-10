import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomRating from './CustomRating';

const ProductReview = ({ review }) => {
  return (
    <View style={styles.reviewContainer}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <CustomRating defaultRating={review.rating} />
        <Text style={styles.reviewDate}>{review.date}</Text>
      </View>
      <Text style={styles.reviewText}>{review.text}</Text>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <Text style={styles.reviewUsername}>by {review.username}</Text>
        <Text style={styles.verifiedText}>verified purchase</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  reviewContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10
  },
  reviewText: {
    fontSize: 14,
    marginBottom: 5
  },
  reviewUsername: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 5
  },
  reviewDate: {
    fontSize: 12,
    color: 'gray'
  },
  verifiedText: {
    color: '#dbd40b'
  }
});

export default ProductReview;
