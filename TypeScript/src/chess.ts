type Color = "Black" | "White";
// x축을 파일이라고 하고
type File = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
// y축을 랭크라고 한다.
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

// 체스 게임
class Game {
  private pieces = Game.makePieces();
  private static makePieces() {
    return [
      // Kings
      new King("White", "E", 1),
      new King("Black", "E", 8),
      // Queens
      new Queen("White", "D", 1),
      new Queen("Black", "D", 8),
      // Bishops
      new Bishop("White", "C", 1),
      new Bishop("White", "F", 1),
      new Bishop("Black", "C", 8),
      new Bishop("Black", "F", 8),
    ];
  }
}

// 체스 말
// abstract 키워드는 해당 클래스를 바로 인스턴스화 할수 없음을 의미할 뿐 필요한 매서드를 추상 클래스에서 자유롭게 구현할 수 있다.
abstract class Piece {
  protected position: Position;
  constructor(
    private readonly color: Color,
    public file: File,
    public rank: Rank
  ) {
    this.position = new Position(file, rank);
  }

  // public으로 다른 모든 코드에서 읽거나 쓸 수 있도록 허용한다.
  public moveTo(position: Position) {
    this.position = position;
  }

  abstract canMoveTo(position: Position): boolean;
}

// 체스 말의 좌표 집합
class Position {
  constructor(private file: File, private rank: Rank) {}
  public distanceFrom(position: Position) {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0)),
    };
  }
}

// 체스의 6가지 말
class King extends Piece {
  canMoveTo(position: Position): boolean {
    let distance = this.position.distanceFrom(position);
    return distance.rank < 2 && distance.file < 2;
  }
}
class Queen extends Piece {}
class Bishop extends Piece {}
class Knight extends Piece {}
class Rook extends Piece {}
class Pawn extends Piece {}

/**
 * public : 어디에서나 접근할 수 있다. 기본적으로 주어지는 접근 수준이다.
 * protected : 이 클래스와 서브클래스 인스턴스에서만 접근할 수 있다.
 * private : 이 클래스의 인스턴스에서만 접근 할 수 있다.
 */
