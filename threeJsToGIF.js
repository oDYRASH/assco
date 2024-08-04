
export function setupGIFRecording(canvasId, buttonId, model) {
    // Find the canvas and renderer

    console.log('canvasId :', canvasId)
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error(`Canvas element with id '${canvasId}' not found.`);
        return;
    }

    const renderer = canvas.__threeRenderer;
    if (!renderer) {
        console.error(`THREE.WebGLRenderer not found on the canvas element with id '${canvasId}'.`);
        return;
    }

    // Function to record the canvas to GIF
    async function recordCanvasToGIF() {
        console.log("Starting GIF recording...");

        // Get the number of logical processors
        const numWorkers = navigator.hardwareConcurrency || 4; // Default to 4 if unavailable
        console.log(`Using ${numWorkers} workers for GIF encoding.`);

        const gif = new GIF({
            workers: numWorkers,
            quality: 25,
            background: 0x000000,
            workerScript: "gif.worker.js" // Reference the local worker script
        });

        model.makeSpin()

        // Capture frames for 3 seconds
        for (let i = 0; i < 3 * 25; i++) {  // Assuming 25 frames per second
            gif.addFrame(canvas, { copy: true, delay: 1000 / 25 });
            console.log(`Captured frame ${i + 1}`);
            await new Promise(requestAnimationFrame);  // Wait for the next animation frame
        }

        console.log("Rendering GIF...");
        gif.on('finished', function(blob) {
            console.log("GIF rendering finished.");
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'recording.gif';
            link.click();
            URL.revokeObjectURL(url);
            console.log("GIF saved.");
        });

        gif.render();
    }

    // Event listener for the record button
    const button = document.getElementById(buttonId)

    button.style.display = 'block'

    document.getElementById(buttonId).addEventListener('click', recordCanvasToGIF);
    console.log('GIF recording setup complete. OOOOOOOOOOOOOOOOOKOKKKKKKKKKKKKKKK');
}
