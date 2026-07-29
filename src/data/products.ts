export interface ProductEntry {
    id: string;
    name: string;
    category: string;
    description: string;
    image: string;
}

export interface SpecRow {
    code: string;
    size: string;
    pcsPerBag: string | number;
    bagPerPallet: string | number;
    pcsPerPallet: string | number;
}

export interface SpecTableData {
    title: string;
    rows: SpecRow[];
}

// Load product images via Vite's import.meta.glob
const productImages = import.meta.glob('/assets/products/*.jpg', { eager: true, query: '?url' });

const imageMap: Record<string, string> = {};
for (const [filePath, mod] of Object.entries(productImages)) {
    const fileName = filePath.split('/').pop() || '';
    imageMap[fileName] = (mod as { default: string }).default;
}

const img = (fileName: string): string => imageMap[fileName] || `/assets/products/${fileName}`;

export const PRODUCT_CATEGORIES = [
    { name: "Fence Fittings", description: "Pressed steel and aluminum fittings" },
    { name: "Hinges", description: "Heavy-duty industrial hinges" },
    { name: "Clamps", description: "Tension and rail clamps" },
    { name: "Tension Bars", description: "High-tensile steel bars" },
    { name: "Gate Hardware", description: "Complete gate solutions" },
    { name: "Connectors & Accessories", description: "Rail ends, sleeves & mounting hardware" }
];

export const PRODUCTS: ProductEntry[] = [
    // Fence Fittings
    { id: "barbed-arm-14-16", name: "Barbed Arm - 14 GA & 16 GA", category: "Fence Fittings", description: "Heavy-duty barbed arm for fence posts, available in 14 and 16 gauge", image: img("barbed-arm-14-ga-and-16-ga.jpg") },
    { id: "barbed-arm-vertical-16", name: "Barbed Arm Vertical - 16 GA", category: "Fence Fittings", description: "Vertical mounting barbed arm in 16 gauge for security fencing", image: img("barbed-arm-vertical-16-ga.jpg") },
    { id: "barbed-arm-cup-type", name: "Barbed Arm - Cup Type", category: "Fence Fittings", description: "Cup-type barbed arm for easy installation on fence posts", image: img("barbed-arm-cup-type.jpg") },
    { id: "barbed-y-arm-14-16", name: "Barbed Y Arm - 14 GA & 16 GA", category: "Fence Fittings", description: "Y-shaped barbed arm for concertina wire, 14 and 16 gauge options", image: img("barbed-y-arm-14-ga-and-16-ga.jpg") },
    { id: "bullet-cap-aluminium", name: "Bullet Cap - Aluminium", category: "Fence Fittings", description: "Aluminium bullet-shaped post cap for decorative and protective finish", image: img("bullet-cap-aluminium.jpg") },
    { id: "collar", name: "Collar", category: "Fence Fittings", description: "Durable pipe collar for connecting and reinforcing fence posts", image: img("collar.jpg") },
    { id: "flange-plate", name: "Flange Plate", category: "Fence Fittings", description: "Steel flange plate for secure post mounting and structural support", image: img("flange-plate.jpg") },
    { id: "floor-flange-malleable", name: "Floor Flange - Malleable", category: "Fence Fittings", description: "Malleable iron floor flange for heavy-duty post installation", image: img("floor-flange-malleable.jpg") },
    { id: "loop-cap-aluminium", name: "Loop Cap - Aluminium", category: "Fence Fittings", description: "Aluminium loop cap for decorative post finishing and protection", image: img("loop-cap-aluminium.jpg") },
    { id: "loop-cap-pressed-steel", name: "Loop Cap - Pressed Steel", category: "Fence Fittings", description: "Pressed steel loop cap for durable post top finishing", image: img("loop-cap-pressed-steel.jpg") },
    { id: "post-cap-aluminium", name: "Post Cap - Aluminium", category: "Fence Fittings", description: "Aluminium post cap for weather protection and aesthetic finish", image: img("post-cap-aluminium.jpg") },
    { id: "post-cap-pressed-steel", name: "Post Cap - Pressed Steel", category: "Fence Fittings", description: "Pressed steel post cap for robust post protection", image: img("post-cap-pressed-steel.jpg") },
    { id: "purlin-backet", name: "Purlin Bracket", category: "Fence Fittings", description: "Steel purlin bracket for structural support in fencing systems", image: img("purlin-backet.jpg") },
    { id: "wall-spike-740mm", name: "Wall Spike - 740mm", category: "Fence Fittings", description: "Heavy-duty wall spike for secure fence post wall mounting", image: img("wall-spike-740mm.jpg") },
    { id: "wood-steel-adapter", name: "Wood Steel Adapter", category: "Fence Fittings", description: "Adapter for connecting wood posts to steel fencing components", image: img("wood-steel-adapter.jpg") },

    // Hinges
    { id: "box-hinge-malleable", name: "Box Hinge - Malleable", category: "Hinges", description: "Heavy-duty malleable iron box hinge for industrial gate applications", image: img("box-hinge-malleable.jpg") },
    { id: "box-hinge-press-steel", name: "Box Hinge - Pressed Steel", category: "Hinges", description: "Pressed steel box hinge for durable gate and door mounting", image: img("box-hinge-press-steel.jpg") },
    { id: "bull-dog-hinge", name: "Bull Dog Hinge - Pressed Steel", category: "Hinges", description: "Pressed steel bull dog hinge for heavy gate applications", image: img("bull-dog-hinge-pressed-steel.jpg") },
    { id: "female-hinge", name: "Female Hinge", category: "Hinges", description: "Female hinge component for secure gate pivoting systems", image: img("female-hinge.jpg") },
    { id: "industrial-offset-hinge-malleable-180", name: "Industrial Offset Hinge Malleable 180°", category: "Hinges", description: "Malleable iron industrial offset hinge with 180° rotation", image: img("industrial-offset-hinge-malleable-180.jpg") },
    { id: "industrial-offset-hinge-pressed-steel-180", name: "Industrial Offset Hinge Pressed Steel 180°", category: "Hinges", description: "Pressed steel industrial offset hinge with 180° rotation capability", image: img("industrial-offset-hinge-pressed-steel-180.jpg") },
    { id: "male-hinge", name: "Male Hinge", category: "Hinges", description: "Male hinge component for complete gate hinge assembly", image: img("male-hinge.jpg") },

    // Clamps
    { id: "boulevard-clamp", name: "Boulevard Clamp (Line Rail Clamp)", category: "Clamps", description: "Line rail clamp for secure fence rail connections, 14 & 16 GA", image: img("boulevard-clamp-14-ga-and-16-ga-line-rail-clamp.jpg") },
    { id: "brace-band", name: "Brace Band - Regular 34 x 12 GA", category: "Clamps", description: "Regular brace band for fence post bracing and reinforcement", image: img("brace-band-regular-34-x-12-ga.jpg") },
    { id: "end-clamp", name: "End Clamp", category: "Clamps", description: "End clamp for terminating fence rails securely", image: img("end-clamp.jpg") },
    { id: "gate-clip", name: "Gate Clip", category: "Clamps", description: "Gate clip for attaching fencing wire to gate frames", image: img("gate-clip.jpg") },
    { id: "kennel-clamp", name: "Kennel Clamp", category: "Clamps", description: "Kennel clamp for specialized fencing and enclosure applications", image: img("kennel-clamp.jpg") },
    { id: "saddle-clamp", name: "Saddle Clamp", category: "Clamps", description: "Saddle clamp for secure pipe and rail connections", image: img("saddle-clamp.jpg") },
    { id: "tension-band-regular", name: "Tension Band Regular - 34 x 14 GA", category: "Clamps", description: "Regular tension band for wire tensioning in fence systems", image: img("tension-band-regular-34x-14-ga.jpg") },

    // Tension Bars
    { id: "tension-bar", name: "Tension Bar", category: "Tension Bars", description: "High-tensile steel tension bar for fence wire tensioning", image: img("tension-bar.jpg") },
    { id: "tie-wire-aluminium", name: "Tie Wire - Aluminium", category: "Tension Bars", description: "Aluminium tie wire for secure fence wire connections", image: img("tie-wire-aluminium.jpg") },
    { id: "truss-rod", name: "Truss Rod", category: "Tension Bars", description: "Steel truss rod for fence structural reinforcement", image: img("truss-rod.jpg") },
    { id: "truss-rod-tightener", name: "Truss Rod Tightener", category: "Tension Bars", description: "Tightener tool for adjusting truss rod tension", image: img("truss-rod-tightener.jpg") },
    { id: "wire-winder", name: "Wire Winder", category: "Tension Bars", description: "Wire winder tool for easy fence wire tensioning and installation", image: img("wire-winder.jpg") },

    // Gate Hardware
    { id: "cantilever-roller-cover", name: "Cantilever Roller Nylon Pressed Steel - With Cover", category: "Gate Hardware", description: "Cantilever roller with nylon wheel and pressed steel body, with protective cover", image: img("cantilever-roller-nylon-pressed-steel-with-cover.jpg") },
    { id: "cantilever-roller-no-cover", name: "Cantilever Roller Nylon Pressed Steel - Without Cover", category: "Gate Hardware", description: "Cantilever roller with nylon wheel and pressed steel body, without cover", image: img("cantilever-roller-nylon-pressed-steel-without-cover.jpg") },
    { id: "cantiliver-malleable", name: "Cantilever - Malleable", category: "Gate Hardware", description: "Malleable iron cantilever for sliding gate support systems", image: img("cantiliver-malleable.jpg") },
    { id: "carriage-bolt-nut", name: "Carriage Bolt & Nut", category: "Gate Hardware", description: "Carriage bolt and nut set for gate and fence assembly", image: img("carriage-bolt-and-nut.jpg") },
    { id: "drop-rod", name: "Drop Rod", category: "Gate Hardware", description: "Drop rod for gate locking and secure closure", image: img("drop-rod.jpg") },
    { id: "fork", name: "Fork", category: "Gate Hardware", description: "Fork component for gate hinge and pivot assemblies", image: img("fork.jpg") },
    { id: "fork-collar-assembly", name: "Fork & Collar Assembly", category: "Gate Hardware", description: "Complete fork and collar assembly for gate hardware systems", image: img("fork-and-collar-assambly.jpg") },
    { id: "gate-corner-aluminium", name: "Gate Corner - Aluminium", category: "Gate Hardware", description: "Aluminium gate corner for frame construction and reinforcement", image: img("gate-corner-aluminium.jpg") },
    { id: "gate-corner-pressed-steel", name: "Gate Corner - Pressed Steel", category: "Gate Hardware", description: "Pressed steel gate corner for heavy-duty gate frame assembly", image: img("gate-corner-pressed-steel.jpg") },
    { id: "hog-ring-aluminium", name: "Hog Ring - Aluminium", category: "Gate Hardware", description: "Aluminium hog ring for fencing and enclosure applications", image: img("hog-ring-aluminium.jpg") },
    { id: "ratched-winder", name: "Ratchet Winder with Malleable Shaft", category: "Gate Hardware", description: "Ratchet winder with malleable iron shaft for wire tensioning", image: img("ratched-winder-with-malleable-shaft.jpg") },
    { id: "single-wheel", name: "Single Wheel", category: "Gate Hardware", description: "Single wheel for sliding gate carrier and track systems", image: img("single-wheel.jpg") },
    { id: "unversal-line-track-bracket", name: "Universal Line Track Bracket", category: "Gate Hardware", description: "Universal bracket for line track mounting and gate systems", image: img("unversal-line-track-bracket.jpg") },
    { id: "walk-gate-set-single", name: "Walk Gate Set - Single", category: "Gate Hardware", description: "Complete single walk gate set with collar, fork, hinges, bolts, and drop rod", image: img("walk-gate-set-single-collar-2-pcs-fork-1-pcs-female-2-pcs-male-2-pcs-bolt-3l8x3-2-pcs-and-3i8x2-2-pcs-drop-rod-1-pcs.jpg") },
    { id: "walk-gate-set-double", name: "Walk Gate Set - Double", category: "Gate Hardware", description: "Complete double walk gate set with collars, forks, hinges, bolts, and drop rod", image: img("walk-gate-set-double-collar-2-pcs-fork-1-pcs-female-6-pcs-male-4-pcs-bolt-38x3-4-pcs-and-3l8x2-6-pcs-drop-rod-1-pcs.jpg") },
    { id: "wheels-sliding-gates-double", name: "Wheels for Sliding Gates - Double Wheel Gate Carrier", category: "Gate Hardware", description: "Double wheel gate carrier with solid rubber wheels for sliding gates", image: img("wheels-for-sliding-gates-double-wheel-gate-carrier-w-6-solid-rubber.jpg") },
    { id: "double-carrier-wheel-set", name: "Double Carrier Wheel Track Set", category: "Gate Hardware", description: "Complete double carrier wheel set with track wheels, brackets, and hardware", image: img("1pc-6-double-carrier-wheel-2pc-track-wheel-6pc-track-bracket-1pc-rolon-bracket-2pc-adjustable-bracket.jpg") },

    // Connectors & Accessories
    { id: "rail-end-aluminium", name: "Rail End - Aluminium", category: "Connectors & Accessories", description: "Aluminium rail end for connecting fence rails to posts", image: img("rail-end-aluminium.jpg") },
    { id: "rail-end-1-hole-pressed-steel", name: "Rail End (1 Hole) - Pressed Steel", category: "Connectors & Accessories", description: "Single hole pressed steel rail end for fence rail connections", image: img("rail-end-1-hole-pressed-steel.jpg") },
    { id: "rail-end-2-hole-pressed-steel", name: "Rail End (2 Hole) - Pressed Steel", category: "Connectors & Accessories", description: "Two hole pressed steel rail end for secure rail mounting", image: img("rail-end-2-hole-pressed-steel.jpg") },
    { id: "rail-end-half-moon", name: "Rail End (Half Moon) - Pressed Steel", category: "Connectors & Accessories", description: "Half moon pressed steel rail end for decorative and functional rail connections", image: img("rail-end-half-moon-pressed-steel.jpg") },
    { id: "rail-end-malleable", name: "Rail End - Malleable", category: "Connectors & Accessories", description: "Malleable iron rail end for heavy-duty fence rail connections", image: img("rail-end-malleable.jpg") },
    { id: "sleeve-top-rail", name: "Sleeve Top Rail", category: "Connectors & Accessories", description: "Top rail sleeve for connecting and extending fence top rails", image: img("sleeve-top-rail.jpg") },
    { id: "track-10", name: "Track 10", category: "Connectors & Accessories", description: "Track component for sliding gate and roller systems", image: img("track-10.jpg") },
];

export const CUSTOM_SPEC_TABLES: Record<string, SpecTableData> = {
    "barbed-arm-14-16": {
        title: "1. BARBED ARM - 14 GA  & 16 GA",
        rows: [
            { code: "350", size: '1 5/8"', pcsPerBag: 25, bagPerPallet: 48, pcsPerPallet: 1200 },
            { code: "370", size: '2"', pcsPerBag: 25, bagPerPallet: 40, pcsPerPallet: 1000 },
            { code: "390", size: '2 1/2"', pcsPerBag: 25, bagPerPallet: 32, pcsPerPallet: 800 },
            { code: "410", size: '3"', pcsPerBag: 20, bagPerPallet: 32, pcsPerPallet: 640 }
        ]
    },
    "barbed-arm-vertical-16": {
        title: "2. BARBED ARM VERTICAL - 16 GA",
        rows: [
            { code: "351", size: '1 5/8"', pcsPerBag: 25, bagPerPallet: 48, pcsPerPallet: 1200 },
            { code: "371", size: '2"', pcsPerBag: 25, bagPerPallet: 40, pcsPerPallet: 1000 },
            { code: "391", size: '2 1/2"', pcsPerBag: 25, bagPerPallet: 32, pcsPerPallet: 800 },
            { code: "411", size: '3"', pcsPerBag: 20, bagPerPallet: 32, pcsPerPallet: 640 }
        ]
    },
    "barbed-arm-cup-type": {
        title: "3. BARBED ARM - CUP TYPE",
        rows: [
            { code: "352", size: '1 5/8"', pcsPerBag: 25, bagPerPallet: 48, pcsPerPallet: 1200 },
            { code: "372", size: '2"', pcsPerBag: 25, bagPerPallet: 40, pcsPerPallet: 1000 },
            { code: "392", size: '2 1/2"', pcsPerBag: 25, bagPerPallet: 32, pcsPerPallet: 800 }
        ]
    },
    "barbed-y-arm-14-16": {
        title: "4. BARBED Y ARM - 14 GA & 16 GA",
        rows: [
            { code: "353", size: '1 5/8"', pcsPerBag: 20, bagPerPallet: 40, pcsPerPallet: 800 },
            { code: "373", size: '2"', pcsPerBag: 20, bagPerPallet: 36, pcsPerPallet: 720 },
            { code: "393", size: '2 1/2"', pcsPerBag: 20, bagPerPallet: 32, pcsPerPallet: 640 },
            { code: "413", size: '3"', pcsPerBag: 15, bagPerPallet: 32, pcsPerPallet: 480 }
        ]
    }
};

export function getProductSpecTable(productId: string, productName: string): SpecTableData {
    if (CUSTOM_SPEC_TABLES[productId]) {
        return CUSTOM_SPEC_TABLES[productId];
    }
    // Default specification table format matching the exact chart structure
    return {
        title: productName.toUpperCase(),
        rows: [
            { code: "350", size: '1 5/8"', pcsPerBag: 25, bagPerPallet: 48, pcsPerPallet: 1200 },
            { code: "370", size: '2"', pcsPerBag: 25, bagPerPallet: 40, pcsPerPallet: 1000 },
            { code: "390", size: '2 1/2"', pcsPerBag: 25, bagPerPallet: 32, pcsPerPallet: 800 },
            { code: "410", size: '3"', pcsPerBag: 20, bagPerPallet: 32, pcsPerPallet: 640 }
        ]
    };
}

