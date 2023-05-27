import * as ds from "@devicescript/core"

const lightBulb = new ds.LightBulb()
setInterval(async () => {
    const brightness = await lightBulb.intensity.read()
    await lightBulb.intensity.write(brightness > 0 ? 0 : 1)
}, 1000)
