import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { BoardCard } from '../BoardCard/BoardCard';
import styles from './BoardColumn.module.css';
import type { IBoardColumn } from '../../types/kanban';
import { IconButton } from '../IconButton/IconButton';

interface BoardColumnProps extends IBoardColumn {
  onAddCard: (columnId: string) => void;
}

export const BoardColumn: React.FC<BoardColumnProps> = ({ id, title, cards, onAddCard }) => {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <div ref={setNodeRef} className={styles.container}>
      <h3>{title}</h3>
      <div className={styles.cards}>
        {id === 'todo' && <IconButton onClick={() => onAddCard(id)} />}
        {cards.map((card) => (
          <BoardCard key={card.id} id={card.id} title={card.title} />
        ))}
      </div>
    </div>
  );
};
