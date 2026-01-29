import { useState } from 'react';
import styles from './Board.module.css';
import { DndContext, type DragEndEvent } from '@dnd-kit/core';
import { BoardColumn } from '../BoardColumn/BoardColumn';
import type { IBoardCard, IBoardColumn } from '../../types/kanban';

export const Board = () => {
  const initialColumns: IBoardColumn[] = [
    {
      id: 'todo',
      title: 'Todo',
      cards: [
        { id: '1', title: 'Create dnd' },
        { id: '2', title: 'Create Kanban board' },
      ],
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      cards: [],
    },
    {
      id: 'done',
      title: 'Done',
      cards: [],
    },
  ];

  const addCard = (columnId: string) => {
    setColumns((prev) =>
      prev.map((column) =>
        column.id === columnId
          ? {
              ...column,
              cards: [
                ...column.cards,
                {
                  id: crypto.randomUUID(),
                  title: 'New card',
                },
              ],
            }
          : column,
      ),
    );
  };

  const [columns, setColumns] = useState(initialColumns);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    const cardId = active.id;
    const targetColumnId = over.id;

    setColumns((prev) => {
      let movedCard: IBoardCard | null = null;

      // remove card from old column
      const newColumns = prev.map((column) => {
        const cards = column.cards.filter((card) => {
          if (card.id === cardId) {
            movedCard = card;
            return false;
          }
          return true;
        });

        return { ...column, cards };
      });

      // add card to new column
      return newColumns.map((column) => {
        if (column.id === targetColumnId && movedCard) {
          return {
            ...column,
            cards: [...column.cards, movedCard],
          };
        }
        return column;
      });
    });
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className={styles.container}>
        <h3>Kanban</h3>
        <div className={styles.board}>
          {columns.map((column) => (
            <BoardColumn key={column.id} id={column.id} title={column.title} cards={column.cards} onAddCard={addCard} />
          ))}
        </div>
      </div>
    </DndContext>
  );
};
