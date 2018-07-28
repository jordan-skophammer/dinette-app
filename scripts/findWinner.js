"use strict";

const votes = [
    ['2', '1', '3'],
    ['3', '2', '1'],
    ['2', '1', '3'],
    ['3', '2', '1'],
    ['1', '2', '3'],
];

const candidates = ["Pizza Place", "Holy Basil", "Taco House"];

function removeCandidates(voteList, lowestCandidates) {

    const result = [];
    voteList.forEach(function (oneSetOfVotes) {
        result.push(oneSetOfVotes.filter(function (singlePreference) {
            return lowestCandidates.indexOf(singlePreference) === -1;
        }));
    });
    return result;
}

function calcTallies(voteList) {
    let result;
    let tallies;

    tallies = {};
    voteList.forEach(function (oneSetOfVotes) {
        const topVote = oneSetOfVotes[0];

        if (!topVote) {
            return;
        }

        if (!tallies[topVote]) {
            tallies[topVote] = 0;
        }

        tallies[topVote] += 1;
    });

    result = {
        highest: [],
        highestCount: 0,
        lowest: [],
        lowestCount: voteList.length,
    };

    Object.keys(tallies).forEach(function (index) {
        const score = tallies[index];

        if (result.highestCount < score) {
            result.highestCount = score;
            result.highest = [index];
        } else if (result.highestCount === score) {
            result.highest.push(index);
        }

        if (result.lowestCount > score) {
            result.lowestCount = score;
            result.lowest = [index];
        } else if (result.lowestCount === score) {
            result.lowest.push(index);
        }
    });

    result.highestPct = result.highestCount / voteList.length;
    result.LowestPct = result.lowestCount / voteList.length;

    return result;
}

function winner(candids, highest) {
    let out;

    out = [];
    highest.forEach(function (indexPlusOne) {
        if (candids[indexPlusOne - 1]) {
            out.push(candids[indexPlusOne - 1]);
        }
    });

    if (out.length) {
        return out.join(' + ');
    }

    return 'no winner';
}


// console.log(findWinner(candidates, votes));
module.exports = function findWinner(candidates, votes) {
    if (!Array.isArray(candidates) || !candidates.length) {
        console.log('no candidates');
        return;
    }

    if (!Array.isArray(votes) || !votes.length) {
        console.log('no votes');
        return;
    }
    
    let tallies;

    while (true) {
        tallies = calcTallies(voteList);

        if (tallies.highestPct >= 0.5) {
            return winner(candidateList, tallies.highest);
        }

        if (tallies.lowestPct === tallies.highestPct) {
            return winner(candidateList, tallies.highest);
        }

        voteList = removeCandidates(voteList, tallies.lowest);
    }
}
