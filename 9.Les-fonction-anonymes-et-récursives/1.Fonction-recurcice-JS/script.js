function countDown(timeLeft) {
    console.log(timeLeft)
    timeLeft--

    if (timeLeft > 0) {
        return countDown(timeLeft);
    }
    console.log('Le repas est prêt');
    return true;
}

countDown(5)