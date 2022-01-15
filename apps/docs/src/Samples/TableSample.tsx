import {
  Align,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "solid-material-ui";
import { For } from "solid-js";

export function TableSample() {
  const rows = [
    {
      name: "Frozen yoghurt",
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
    },
    {
      name: "Ice cream sandwich",
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
    },
    { name: "Eclair", calories: 262, fat: 14.0, carbs: 24, protein: 6.0 },
    { name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 5.3 },
    { name: "Gingerbread", calories: 356, fat: 16.0, carbs: 49, protein: 3.2 },
  ];

  return (
    <Paper style={{ width: "100%", "overflow-x": "auto" }}>
      <Table style={{ "min-width": "650px" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align={Align.Right}>Calories</TableCell>
            <TableCell align={Align.Right}>Fat&nbsp;(g)</TableCell>
            <TableCell align={Align.Right}>Carbs&nbsp;(g)</TableCell>
            <TableCell align={Align.Right}>Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <For each={rows}>
            {(row) => (
              <TableRow>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align={Align.Right}>{row.calories}</TableCell>
                <TableCell align={Align.Right}>{row.fat}</TableCell>
                <TableCell align={Align.Right}>{row.carbs}</TableCell>
                <TableCell align={Align.Right}>{row.protein}</TableCell>
              </TableRow>
            )}
          </For>
        </TableBody>
      </Table>
    </Paper>
  );
}
