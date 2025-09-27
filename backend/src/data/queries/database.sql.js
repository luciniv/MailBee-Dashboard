
const kpiMetrics = `
WITH ticket_window AS (
    SELECT *
    FROM tickets_v2
    WHERE guildID = 346515443869286410
      AND dateOpen BETWEEN '2025-06-01' AND '2025-09-03'
),
first_messages AS (
    SELECT channelID, MIN(date) AS first_date
    FROM ticket_messages_v2
    WHERE type = 'Sent'
    GROUP BY channelID
),
ticket_message_counts AS (
    SELECT ticket_window.channelID, 
    COUNT(ticket_messages_v2.messageID) AS message_count
    FROM ticket_window
    INNER JOIN ticket_messages_v2
      ON ticket_window.channelID = ticket_messages_v2.channelID
    WHERE ticket_window.state = 'closed'
    GROUP BY ticket_window.channelID
),
unique_mods AS (
    SELECT closerID AS authorID
    FROM ticket_window
    UNION
    SELECT ticket_messages_v2.authorID
    FROM ticket_messages_v2
    INNER JOIN ticket_window
      ON ticket_messages_v2.channelID = ticket_window.channelID
    WHERE ticket_messages_v2.type IN ('Sent', 'Discussion')
)
SELECT
    (SELECT AVG
    (TIMESTAMPDIFF(MINUTE, ticket_window.dateOpen, first_messages.first_date))
     FROM ticket_window
     INNER JOIN first_messages
       ON ticket_window.channelID = first_messages.channelID) 
       AS avg_first_response,

    (SELECT AVG(TIMESTAMPDIFF(MINUTE, dateOpen, dateClose))
     FROM ticket_window
     WHERE state = 'closed') AS avg_resolution_time,

    (SELECT AVG(message_count)
     FROM ticket_message_counts) AS avg_messages_per_ticket,

    (SELECT COUNT(DISTINCT authorID)
     FROM unique_mods) AS total_mods;`

const satisfactionMetrics = `
WITH ticket_window AS (
    SELECT *
    FROM tickets_v2
    WHERE guildID = 346515443869286410
      AND dateOpen BETWEEN '2025-06-01' AND '2025-09-03'
)
    (SELECT rating, COUNT(*)
	FROM ticket_window
	GROUP BY rating);`

const typeVolumeMetrics = `
WITH ticket_window AS (
    SELECT *
    FROM tickets_v2
    WHERE guildID = 346515443869286410
      AND dateOpen BETWEEN '2025-06-01' AND '2025-09-03'
)
    (SELECT typeName, COUNT(*)
	FROM ticket_window 
	JOIN ticket_types ON ticket_window.type = ticket_types.typeID
	GROUP BY typeName);
`

const totalVolumeMetrics = ``

export { kpiMetrics, satisfactionMetrics, typeVolumeMetrics, totalVolumeMetrics };