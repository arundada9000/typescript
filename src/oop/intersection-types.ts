type BaseChai = { teaLeaves: number };
type Extra = { masala: number };

type MasalasChai = BaseChai & Extra;

const cup: MasalasChai = {
  teaLeaves: 20,
  masala: 1,
};
