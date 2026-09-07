export const EVENT = {
  child: 'Miguel Levi',
  dateLabel: '25 de outubro de 2026',
  timeLabel: '16:00',
  venue: 'Espaço Dolphin',

  // Local time of the celebration (used by the countdown).
  target: new Date('2026-10-25T16:00:00-03:00'),

  rsvpDeadline: '18 de outubro',

  mapsQuery: 'Espaço Dolphin',
} as const

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  EVENT.mapsQuery,
)}`

const whatsappMessage = encodeURIComponent(
  `Olá! Confirmo presença na Missão Nº 01 — aniversário de 1 ano do ${EVENT.child}! 🦸`,
)

export const whatsappMomUrl = `https://wa.me/5585991174858?text=${whatsappMessage}`

export const whatsappDadUrl = `https://wa.me/5585992787602?text=${whatsappMessage}`