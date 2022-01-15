import {
  AlarmIcon,
  Alert,
  AlertTitle,
  AlertVariant,
  Button,
  CheckIcon,
  Color,
  FontSize,
  Severity,
  Size,
  useStyles,
} from "solid-material-ui";

export function AlertSample() {
  const styles = useStyles({
    container: `
      width: 100%;
      & > * + * {
        margin-top: 16px;
      }
    `,
  });
  return (
    <div class={styles.container}>
      <Alert severity={Severity.Error}>
        This is an error alert — check it out!
      </Alert>
      <Alert severity={Severity.Warning} variant={AlertVariant.Filled}>
        This is a warning alert — check it out!
      </Alert>
      <Alert severity={Severity.Info} variant={AlertVariant.Standard}>
        This is an info alert — check it out!
      </Alert>
      <Alert severity={Severity.Success} variant={AlertVariant.Outlined}>
        This is a success alert — check it out!
      </Alert>

      <Alert onClose={() => console.log("closed")}>
        This is a success alert — check it out!
      </Alert>
      <Alert
        severity={Severity.Success}
        action={
          <Button color={Color.Inherit} size={Size.Small}>
            UNDO
          </Button>
        }
      >
        This is a success alert — check it out!
      </Alert>

      <Alert severity={Severity.Error}>
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity={Severity.Warning}>
        <AlertTitle>Warning</AlertTitle>
        This is a warning alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity={Severity.Info}>
        <AlertTitle>Info</AlertTitle>
        This is an info alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity={Severity.Success}>
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert>

      <Alert
        severity={Severity.Success}
        icon={<CheckIcon fontSize={FontSize.Inherit} />}
      >
        This is a success alert — check it out!
      </Alert>
      <Alert icon={<AlarmIcon fontSize={FontSize.Inherit} />}>
        This is a success alert — check it out!
      </Alert>
      <Alert noIcon severity={Severity.Success}>
        This is a success alert — check it out!
      </Alert>
    </div>
  );
}
