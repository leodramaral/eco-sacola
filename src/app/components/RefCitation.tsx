import React from 'react';

interface RefCitationProps {
  ids: number[];
}

export function RefCitation({ ids }: RefCitationProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Scroll to references section
    const el = document.getElementById('section-references');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Dispatch highlight event
    document.dispatchEvent(
      new CustomEvent('ecosacola-highlight-ref', { detail: { refIds: ids } })
    );
  };

  return (
    <sup>
      <button
        onClick={handleClick}
        title={`Ver referência${ids.length > 1 ? 's' : ''} [${ids.join(', ')}]`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '1px',
          marginLeft: '2px',
          cursor: 'pointer',
          background: 'transparent',
          border: 'none',
          padding: 0,
          lineHeight: 1,
        }}
      >
        {ids.map((id, i) => (
          <span
            key={id}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.65em',
              color: '#4ADE80',
              opacity: 0.85,
              fontWeight: 600,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.85')}
          >
            [{id}]{i < ids.length - 1 ? ',' : ''}
          </span>
        ))}
      </button>
    </sup>
  );
}
