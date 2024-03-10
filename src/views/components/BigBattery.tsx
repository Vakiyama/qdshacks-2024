function Cell({ color }: { color: string }) {
  return (
    <div class="w-full h-[5%] p-px">
      <div class="h-full rounded-md" style={`background-color: ${color}`}></div>
    </div>
  );
}

function getCellCount(cellCount: number, totalPower: number) {
  return Math.round(cellCount * totalPower);
}

export function BigBattery({ power }: { power: number }) {
  const cellCount = 20;
  let greenCellCount = getCellCount(cellCount, power);
  const cells = [];
  for (let i = 0; i < cellCount; i++) {
    cells.push(greenCellCount > 0 ? 'green' : 'grey');
    greenCellCount--;
  }
  return (
    <div class="h-full w-2/4 flex relative">
      <div class="w-1/3 bg-gray-50 border-black border-l-2 border-r-2 border-t-2 h-4 rounded-t absolute left-1/3 -top-3 z-10" />
      <div class="border-black border-2 rounded-xl h-full w-full relative p-2">
        <div class="border-black border-2 rounded-xl h-full w-full p-1">
          {cells.toReversed().map((cell) => {
            return <Cell color={cell} />;
          })}
        </div>
      </div>
    </div>
  );
}
