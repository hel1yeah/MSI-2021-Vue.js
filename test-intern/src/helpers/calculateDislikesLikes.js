let like = [];
let disLike = [];
function calculate(votes) {
  votes.forEach((vote) => {
    if (vote.value) {
      like.push(vote);
    } else {
      disLike.push(vote);
    }
  });
}

export default {
  calculate,
  like,
  disLike,
};
