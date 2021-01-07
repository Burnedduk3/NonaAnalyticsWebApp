export interface IMilestone{
  Milestones: MilestoneClass;
  color: string
}

/**
 *  that will be shown in the page.
 *  */
export class MilestoneClass {
    title: string = '';
    text: string = '';
    /**
     * Creates an instance of MilestoneClass.
     *
     * @constructor
     * @author: Juan David Cabrera
     * @param {title} title of the milestone.
     * @param {text}  text of the milestone.
     */
    constructor(title: string, text: string) {
    /** @private */ this.title = title;
      /** @private */ this.text = text;
    }

    /**
     * Returns the title of the milestone.
     *
     * @return {title} the title of the milestone.
     * @since 1.0.0
     */
    getTitle(): string {
      return this.title;
    }

    /**
     * Returns the text of the milestone.
     *
     * @return {text} The text of the milestone.
     * @since 1.0.0
     */
    getText(): string {
      return this.text;
    }

    /**
     * Find a String representation of the Circle.
     *
     * @override
     * @return {string} Human-readable representation of this Circle.
     */
    toString() {
      return `{
          title: ${this.title},
          text: ${this.text}
      }`;
    }
}
