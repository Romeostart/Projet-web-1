"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

const BOARD_SIZE = 16;
type Point = { x: number; y: number };
type Direction = "up" | "down" | "left" | "right";

const directionVectors: Record<Direction, Point> = { up: { x: 0, y: -1 }, down: { x: 0, y: 1 }, left: { x: -1, y: 0 }, right: { x: 1, y: 0 } };
const opposite: Record<Direction, Direction> = { up: "down", down: "up", left: "right", right: "left" };
const initialSnake: Point[] = [{ x: 7, y: 8 }, { x: 6, y: 8 }, { x: 5, y: 8 }];

function randomFood(snake: Point[]) {
  const openCells: Point[] = [];
  for (let y = 0; y < BOARD_SIZE; y += 1) for (let x = 0; x < BOARD_SIZE; x += 1) if (!snake.some((segment) => segment.x === x && segment.y === y)) openCells.push({ x, y });
  return openCells[Math.floor(Math.random() * openCells.length)] ?? { x: 8, y: 8 };
}

export function SnakeGame() {
  const [snake, setSnake] = useState<Point[]>(initialSnake);
  const [food, setFood] = useState<Point>({ x: 11, y: 8 });
  const [direction, setDirection] = useState<Direction>("right");
  const [queuedDirection, setQueuedDirection] = useState<Direction>("right");
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState<"ready" | "playing" | "over">("ready");

  const reset = useCallback(() => {
    setSnake(initialSnake);
    setFood({ x: 11, y: 8 });
    setDirection("right");
    setQueuedDirection("right");
    setScore(0);
    setStatus("ready");
  }, []);

  const startNewGame = useCallback(() => {
    setSnake(initialSnake);
    setFood({ x: 11, y: 8 });
    setDirection("right");
    setQueuedDirection("right");
    setScore(0);
    setStatus("playing");
  }, []);

  const changeDirection = useCallback((nextDirection: Direction) => {
    setQueuedDirection((currentDirection) => opposite[currentDirection] === nextDirection ? currentDirection : nextDirection);
    setStatus((currentStatus) => currentStatus === "ready" ? "playing" : currentStatus);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const keys: Record<string, Direction | undefined> = { ArrowUp: "up", w: "up", z: "up", ArrowDown: "down", s: "down", ArrowLeft: "left", q: "left", a: "left", ArrowRight: "right", d: "right" };
      const nextDirection = keys[event.key.toLowerCase()] ?? keys[event.key];
      if (!nextDirection) return;
      event.preventDefault();
      changeDirection(nextDirection);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [changeDirection]);

  useEffect(() => {
    if (status !== "playing") return;
    const timer = window.setInterval(() => {
      setSnake((currentSnake) => {
        const nextDirection = queuedDirection;
        setDirection(nextDirection);
        const vector = directionVectors[nextDirection];
        const head = currentSnake[0];
        const nextHead = {
          x: (head.x + vector.x + BOARD_SIZE) % BOARD_SIZE,
          y: (head.y + vector.y + BOARD_SIZE) % BOARD_SIZE,
        };
        const hitSelf = currentSnake.some((segment) => segment.x === nextHead.x && segment.y === nextHead.y);
        if (hitSelf) {
          setStatus("over");
          return currentSnake;
        }
        const ateFood = nextHead.x === food.x && nextHead.y === food.y;
        const nextSnake = ateFood ? [nextHead, ...currentSnake] : [nextHead, ...currentSnake.slice(0, -1)];
        if (ateFood) {
          setScore((currentScore) => currentScore + 1);
          setFood(randomFood(nextSnake));
        }
        return nextSnake;
      });
    }, 150);
    return () => window.clearInterval(timer);
  }, [food, queuedDirection, status]);

  const cells = useMemo(() => Array.from({ length: BOARD_SIZE * BOARD_SIZE }, (_, index) => index), []);

  return (
    <div className="game-shell">
      <div className="game-topline"><div><p className="eyebrow">Démo interactive</p><h3>Snake / règles classiques</h3></div><div className="game-score" aria-live="polite"><span>Score</span><strong>{score.toString().padStart(2, "0")}</strong></div></div>
      <div className="game-board" role="application" aria-label="Jeu Snake"><div className="game-cells">{cells.map((cell) => { const point = { x: cell % BOARD_SIZE, y: Math.floor(cell / BOARD_SIZE) }; const isSnake = snake.some((segment) => segment.x === point.x && segment.y === point.y); const isHead = snake[0]?.x === point.x && snake[0]?.y === point.y; const isFood = food.x === point.x && food.y === point.y; return <span className={`game-cell${isSnake ? " snake-cell" : ""}${isHead ? " snake-head" : ""}${isFood ? " food-cell" : ""}`} key={`${point.x}-${point.y}`} />; })}</div>{status !== "playing" && <div className="game-overlay"><p>{status === "over" ? "Partie terminée" : "Prêt à jouer"}</p><Button onClick={status === "over" ? startNewGame : () => changeDirection(direction)} size="sm">{status === "over" ? "Rejouer" : "Commencer"}</Button></div>}</div>
      <div className="game-controls"><div className="direction-pad" aria-label="Commandes du jeu"><Button aria-label="Monter" onClick={() => changeDirection("up")} size="icon" variant="outline"><ArrowUp size={16} /></Button><Button aria-label="Aller à gauche" onClick={() => changeDirection("left")} size="icon" variant="outline"><ArrowLeft size={16} /></Button><Button aria-label="Descendre" onClick={() => changeDirection("down")} size="icon" variant="outline"><ArrowDown size={16} /></Button><Button aria-label="Aller à droite" onClick={() => changeDirection("right")} size="icon" variant="outline"><ArrowRight size={16} /></Button></div><Button onClick={reset} size="sm" variant="ghost"><RotateCcw size={15} /> Réinitialiser</Button></div>
      <p className="game-hint">Touches fléchées ou ZQSD · Les bords se rejoignent · Attrape les carrés</p>
    </div>
  );
}
