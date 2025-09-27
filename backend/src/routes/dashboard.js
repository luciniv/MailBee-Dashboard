import { Router } from "express";
import dbPool from "../data/database.js";
import redis from "../data/cache.js";
import {  kpiMetrics, satisfactionMetrics, typeVolumeMetrics, totalVolumeMetrics } 
from "../data/queries/database.sql.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const { server, start, end, interval} = req.query;

    const [kpi] = await dbPool.query(kpiMetrics,
      [server, start, end]
    );

    const [satisfaction] = await dbPool.query(satisfactionMetrics,
        [server, start, end]
    );
    
    const [typeVolume] = await dbPool.query(typeVolumeMetrics,
        [server, start, end]
    );

    // Combine all results into a single response
    res.json({ kpi, satisfaction, typeVolume });

  } catch (err) {
    console.error("Dashboard query failed:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
