pragma solidity ^0.4.11;

contract Review {

  /*****************************************
   * Data structures
   *****************************************/

  struct Review {
    User user; // belongs to reviewer
    Movie movie; // belongs to movie
    bool sentiment;
    string comments;
  }

  struct Movie {
    uint id;
    bytes32 title;
    bytes32 link;
    bytes32 image;
    uint positiveVotes;
    uint negativeVotes;
    mapping(uint => Review) reviews; // has many reviews
  }

  struct User {
    uint reputation;
    mapping(uint => Review) reviews; // use ID of movie to retrieve review
  }

  /*****************************************
   * Globals
   *****************************************/

  // public mapping of all movies
  mapping(uint => Movie) movies;

  // Movie ID count
  uint private lastMovieID;

  // Public array of reviewers
  mapping(address => User) users;

  /*****************************************
   * Reviewer / Reviewing logic
   *****************************************/

  /** 
   * store new reviewer, they must
   * pay so that users cannot maliciously
   * create many accounts
   */
  function newReviewer() payable {
    require(msg.value == 1 ether);
    users[msg.sender] = User({reputation: 1});
  }

  /**
   * write review
   * reviewer can only review a movie once
   */
  function writeReview(uint _id, bool _sentiment, string _comments) public {
    User user = users[msg.sender];
    Movie movie = movies[_id];
    Review memory review = Review({user: user, movie: movie, sentiment: _sentiment, comments: _comments});

    if (_sentiment) {
      movie.positiveVotes += 1; 
    } else {
      movie.negativeVotes += 1;
    }
    user.reviews[_id] = review; // map movie onto reviewer
  }

  /*****************************************
   * Movie Operations
   *****************************************/

  // Need some way of checking that the movie doesn't already exist...
  function addMovie(bytes32 _title, bytes32 _link, bytes32 _image) public {
    uint id = lastMovieID + 1;
    Movie memory newMovie = Movie({id: id, title: _title, link: _link, image: _image, positiveVotes: 0, negativeVotes: 0});
    movies[id] = newMovie;
    lastMovieID++;
  }

  function getMovie(uint index) public constant returns (bytes32, bytes32, bytes32, uint, uint) {
    return (movies[index].title, movies[index].link, movies[index].image, movies[index].positiveVotes, movies[index].negativeVotes);
  }
}