import type React from 'react';

import styles from './BoardCard.module.css';
import { useDraggable } from '@dnd-kit/core';
import type { IBoardCard } from '../../types/kanban';

export const BoardCard: React.FC<IBoardCard> = ({ id, title }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  const style = {
    transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className={styles.container}>
      {title}
    </div>
  );
};
